import "./stylent.css";
const OpenCV = () => {
  return (
    <div id="main">
      <video class="input_video"></video>
      <div id="draw_area">
        <canvas className="output_canvas" width="1280px" height="720px"></canvas>
        <div id="side">
          <button id="clear_button" className="side_button" type="button">
            Clear Board{" "}
          </button>
          <button id="dl_button" className="side_button" type="button">
            Predict
          </button>
        </div>
      </div>
      <input id="download_button" type="button" value="Download Point List" />
    </div>
  );
};

export default OpenCV;
