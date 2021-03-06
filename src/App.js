import "./App.css";
import "tachyons";
import GridTitles from "./Components/GridTitles/GridTitles";
import Story from "./Components/Story/Story";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StoryContextProvider } from "./contexts/StoryContext";
import Question from "./Components/Question/Question";
import Menu from "./Components/Menu/Menu";
import Login from "./Components/Login/Login";
import { UserContextProvider } from "./contexts/UserContext";
import MyStories from "./Components/MyStories/MyStories";
import MyStory from "./Components/MyStories/MyStory/MyStory";

function App() {
  

  return (
    <BrowserRouter>
      <Switch>
        <UserContextProvider>
          <StoryContextProvider>
            <Menu />
            <Route exact path={process.env.PUBLIC_URL +"/"}>
              <GridTitles />
            </Route>
            <Route exact path={process.env.PUBLIC_URL +"/login"}>
              <Login />
            </Route>
            <Route path={process.env.PUBLIC_URL +"/story/:storyId"}>
              <Question />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/result"}>
              <Story />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + "/my-stories"}>
              <MyStories />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/my-stories/:myStoryId"}>
              <MyStory />
            </Route>
          </StoryContextProvider>
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
