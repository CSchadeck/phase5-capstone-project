function Home({ user, env }) {
  console.table('user:', user);
  if (user) {
    return <div> <h1>Welcome, {user.username}!</h1>
      <div className="home">
      <p className="home-text"> Welcome to a community of loving pet owners. Condo pet offers a safe, private place for you and your neighers to support each other for pet-sitting needs. </p>
      </div>
      <footer><img className="pup-gif" src="https://mission.vet/wp-content/uploads/2016/11/mvs-3.gif" alt= "cute pets"/></footer>
      <div><ul>
        <li>Post a Pet sitting, or pet care need on the POST page</li>
        <li>Keep track of your request status in the MY PROFILE page</li>
        <li>Can you return the favor? Check out the REQUESTS page to see who among your neighbors is in need of pet care.</li></ul></div></div>;
  } else {
    return <div><h1>Hi There!</h1> <dive className="home"><h3 >Welcome to CondoPet. A private community board for your residential building or neighborhood. CondoPet is where pet owners and animal lovers alike, can reach out directly to one another for pet sitting needs. </h3></dive> </div>;
  }
}

export default Home;
