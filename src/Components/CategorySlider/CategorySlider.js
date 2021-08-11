import SliderButtons from "./SliderButtons";

const CategorySlider = () => (
    <div className="flex py-2 overflow-auto">
        <SliderButtons text="All" />
        <SliderButtons text="Random" />
        <SliderButtons text="Cooking" />
        <SliderButtons text="Music" />
        <SliderButtons text="Racing" />
        <SliderButtons text="Reading" />
        <SliderButtons text="Fighting" />
        <SliderButtons text="Sleep" />
        <SliderButtons text="Gaming" />
        <SliderButtons text="Fashion" />
        <SliderButtons text="Playlist" />
        <SliderButtons text="Cooking" />
        <SliderButtons text="Programming" />
        <SliderButtons text="Something Else" />
    </div>
);

export default CategorySlider;