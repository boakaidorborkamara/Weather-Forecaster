import TodayHighlightCard from "./TodayHighlightCard";

function TodayHighlightSection() {
  return (
    <section className="w-75 d-flex flex-column text-center text-white">
      <div className="d-flex flex-wrap justify-content-center ">
        {/* section header  */}
        <h4 className=" col-10 pt-5 m-2 text-start">Today's Highlights</h4>

        {/*  today's hightlight cards  */}
        <TodayHighlightCard />
        <TodayHighlightCard />
        <TodayHighlightCard />
        <TodayHighlightCard />
      </div>
    </section>
  );
}

export default TodayHighlightSection;
