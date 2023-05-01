import { useEffect, useState } from "react";
export default function useScript(url) {
  // console.log("url", url);
  const [status, setStatus] = useState(url ? "loading" : "error");
  useEffect(() => {
    if (!url) {
      setStatus("error");
      return;
    }

    let script = document.querySelector(`script[src="${url}"]`);

    if (!script) {
      console.log("script not found, creating new one...");
      script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);

      const setAttributeFromEvent = (event) => {
        script.setAttribute(
          "data-status",
          event.type === "load" ? "ready" : "error"
        );
        setStateFromEvent(event.type);
      };

      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    } else {
      setStatus(script.getAttribute("data-status"));
    }

    const setStateFromEvent = (event) => {
      console.log("setStateFromEvent");
      setStatus(event.type === "load" ? "ready" : "error");
    };

    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);
    console.log("script", script);
    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
    };
  }, [url]);

  console.log("status", status);

  return status;
}
