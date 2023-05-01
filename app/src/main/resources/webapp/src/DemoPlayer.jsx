import useScript from "./hooks/useScript";
import { useEffect } from "react";

const access_key = "97fc9870723593468099bc59a5c7459b"; // 발급받은 VPE 라이센스 키
const url =
  "https://kr.object.ncloudstorage.com/bitcamp-bucket22/ncplayer-1.3.0.umd.min-25d18545.js";

function createPlayer(boseurl, id) {
  console.log("boseurl", boseurl);
  // eslint-disable-next-line no-undef
  let player = new ncplayer(id, {
    playlist: { boseurl }
  });
}

function DemoPlayer(boseurl) {
  let status = useScript(url);
  console.log("status-demo", status);
  useEffect(() => {
    if (status === "ready") {
      // 스크립트가 준비된 상태에서 플레이어를 생성합니다.
      createPlayer(boseurl, "video");
    } else {
      console.log("not ready", url);
    }
  }, [status]);

  return (
    <>
      <div>
        <div id="video"></div>
      </div>
    </>
  );
}
export default DemoPlayer;
