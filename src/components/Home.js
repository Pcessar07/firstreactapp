import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="This is Home Page" />
      <div className="container">
        <div className="row">
          <div className="col-lg8 offset-lg-2 my-5">
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati atque provident, officia nostrum harum corporis ipsum,
              dignissimos ratione assumenda error laboriosam sequi nemo
              molestias itaque vitae maiores temporibus? Nihil, autem?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
