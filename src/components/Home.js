function Home({ user, env }) {
  console.table('user:', user);
  if (user) {
    return <div> <h1 className="text-center">Welcome, {user.username}!</h1>
      <div className="home-top">
      <p> Welcome to a community of loving pet owners. Condo pet offers a safe, private place for you and your neighers to support each other for pet-sitting needs. </p>
      </div>
      <img className="pup-gif block-center" src="https://mission.vet/wp-content/uploads/2016/11/mvs-3.gif" alt= "cute pets"/>
     <footer><></></footer>; 
         </div>;
       
  } else {
    return <div><h1>Hi There!</h1> <dive className="home-top"><p>Welcome to CondoPet. A private community board for your residential building or neighborhood. CondoPet is where pet owners and animal lovers alike, can reach out directly to one another for pet sitting needs. </p></dive> 
     <footer><></></footer>
    </div>;
  }
}

export default Home;
