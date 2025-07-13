import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  return (
    <div className="flex flex-col w-full h-full min-h-screen bg-stone-100 dark:bg-stone-900 overflow-y-scroll">
      <Navbar />
      <main className="flex flex-1 flex-col items-center p-6 gap-2">
        <img
          src="./assets/user-yan-yan.jpg"
          alt=""
          className="w-40 aspect-square rounded-full shadow-lg"
        />
        <div className="font-bold text-4xl mt-4 text-black/90 dark:text-white/90">
          Yan Yan
        </div>
        <p className="text-black/90 dark:text-white/90">
          အိမ်ရှင်မတို့အတွက် အားထားရာ
        </p>
        <div className="w-full border-b-[.1rem] border-stone-300 dark:border-stone-700 mt-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mt-6 gap-6">
          <RecipeCard
            source="./assets/img/egg-recipe-01.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-02.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-03.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-04.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-05.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-06.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-07.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-08.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-09.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-10.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-11.jpg"
            title="ကြက်ဉကြော်"
          />
          <RecipeCard
            source="./assets/img/egg-recipe-12.jpg"
            title="ကြက်ဉကြော်"
          />
        </div>
      </main>
    </div>
  );
};

export default App;
