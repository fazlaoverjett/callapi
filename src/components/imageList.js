import Imageitem from "./Imageitem";

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <Imageitem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
