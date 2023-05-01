const NCPlayerUrl =
  "https://kr.object.ncloudstorage.com/bitcamp-bucket22/ncplayer-1.3.0.umd.min-25d18545.js";

const loadNCPlayer = async () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    // console.log("script", script);
    script.src = NCPlayerUrl;
    script.onload = () => {
      // 로드된 스크립트에서 제공되는 객체나 함수 등을 반환
      const NCPlayerModule = window.ncplayer;
      if (NCPlayerModule) {
        resolve(NCPlayerModule);
        console.log("resolve", resolve);
      } else {
        reject(new Error("Failed to load NCPlayer module"));
      }
    };
    script.onerror = () => {
      reject(new Error("Failed to load NCPlayer script"));
    };
    document.body.appendChild(script);
  });
};

export default loadNCPlayer;
