function Home({ user }) {
    if (user) {
      return <div> <h1>Welcome, {user.username}!</h1> 
      <h2> If you would like to help out your neighbors who need the occasional pet sitter, check out the Request page. There you will see posts from pet owners who need help with care for their pets while they are away from home. Do you have a pet? Perhaps someone can return the favor! Head over to the Post page and submit your request for your pet care needs. </h2></div> ;
    } else {
      return <div><h1>Hi There!</h1> <h2>Welcome to CondoPet. A private community board for your residential building or neighborhood. CondoPet is a private community where pet owners and animal lovers alike, and reach out directly to one another for pet sitting needs. </h2> </div> ;
    }
  }
  
  export default Home;
  