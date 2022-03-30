import ImageSlider from "react-image-comparison-slider"

function ComparisonSlider() {
  return (
    <div style={{ width: 700, height: 450 }}>
        <ImageSlider
          image1="https://i.imgur.com/BNFAHCl.jpg"
          image2="https://i.imgur.com/gJlr5Pd.jpg"          
          sliderWidth={3}
          sliderColor="gray"
          handleColor="gray"
          handleBackgroundColor="white"
        />
    </div>
  )
}

export default ComparisonSlider