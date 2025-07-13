const RecipeCard = ({ source, title }) => {
  return (
    <div className="flex flex-col rounded-xl">
      <img
        src={source}
        alt=""
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="flex flex-col w-full p-4 gap-4 bg-stone-300 dark:bg-stone-700 rounded-b-xl">
        <h4 className="font-bold text-black/90 dark:text-white/90">{title}</h4>
        <p className="text-black/90 dark:text-white/90">
          ပါဝင်ပစ္စည်းများ- ဆီ၊ ဆား၊ ကြက်ဉ
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
