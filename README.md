# Rewatchables

[Visit the website!](https://thunderous-biscotti-a44df8.netlify.app/)

![App Logo](./src/assets/logo.png)

## Description
Rewatchables is a platform for collecting all your favorite movies and series that are worth a rewatch. Whenever you are in the mood to watch something, but don't feel like scrolling for hours on the various streaming platforms trying to find something good, Rewatchables is there to solve the problem. This platform contains a catalog of only the best content that is worth rewatching, so you will quickly find something to watch for tonight! If you're still having a hard time deciding, you can even ask for a suggestion. When you find something you like, easily view all the details of the selected item (including a small summary on what it was about, a trailer video, and where to watch it!).

## MVP 

- A working Single Page React app with multiple routes.
- App should be integrated with a mock backend.
- Users should be able to Create, Read, Update, and Delete data on the mock backend.
- The home page should display all series and movies in a gallery view.
- There should be a dedicated 'movies' and a 'series' page, which will display the correct data as a list.
- Users should be able to click on any item to view more details on the clicked item.
- Users should be able to generate a random suggestion based on some optional criteria


## Current functionalities
- All MVP functionalities.
- The order of the gallery view is randomized, ensuring that the homepage looks different each time it is opened.
- Users can view trailer videos within the app.
- Users are able to search for items by title.
- Users are warned before deleting an item and need to confirm, in case the button was clicked by accident.
- Adding an item can be done from any page in the app.
- Users can add notes on any item.
- App is fully responsive and looks well on any size screen.

## Backlog 
- Authentication to allow users to have an account and their own personal collection.
- Integrate with a real database.
- Integrate with an external API to receive more data on movies and series.

## Data structure

**main.jsx**

    <BrowserRouter />
    <RefetchProvider />
    <MantineProvider />
    <AppShellComp />

**App.jsx**

    <Routes />
    <Route />
    <Homepage />
    <Suggestions />
    <SearchPage />
    <Series />
    <Movies />
    <About />
    <NotFound />

**AppShellComp.jsx**

    useDisclosure();
    useState(false);

    <AppShell />
    <AppShell.Header />
    <Link />
    <AddButton />
    <AppShell.Navbar />
    <Navbar />
    <AppShell.Main />
    <App />
    <AppShell.Footer />
    <Text />
    <Link />
    <Burger />
    <Icon />

**About.jsx**

    <Paper />
    <Divider />
    <Text />
    <Icon />

**HomePage.jsx**

    <Gallery />

**Movies.jsx**

    <List />

**NotFound.jsx**

    <AspectRatio />
    <Image />

**SearchPage**

    useRefetchCOntext();
    useState();
    useEffect();
    handleMovieInput(event);
    handleSeriesInput(event);

    <Group />
    <TextInput />
    <SimpleGrid />
    <Divider />
    <ListItem />

**Series.jsx**

    <List />

**RefetchContext.jsx**

    createContext();
    useContext(RefetchContext);
    RefetchProvider({children});
    useState(false);

    <RefetchContext.Provider />

**AddButton.jsx**

    useDisclosure(false);

    <Modal />
    <FormModal />
    <Button />
    <Icon />

**Footer.jsx**

    <Link />
    <Text />
    <Icon />

**FormModal.jsx**

    useRefetchContext();
    useState({});
    useEffect();
    useNavigate();
    handleInput(event, name);
    handleSubmit(event);

    <SimpleGrid />
    <NativeSelect />
    <TextInput />
    <MultiSelect />
    <Group />
    <Rating />
    <YearPickerInput />
    <TextInput />
    <NumberInput />
    <TimeInput />
    <Textarea />
    <Button />
    <Icon />

**Gallery.jsx**

    useRefetchContext();
    useState({});
    shuffleResults(resultsArr);
    fetchAndShuffle();
    useEffect();
    useDisclosure(false);
    getDetails(id, type, title, rating);

    <Carousel />
    <Carousel.Slide />
    <AspectRatio />
    <Image />
    <Modal />
    <Group />
    <Rating />
    <RewatchableDetails />

**List.jsx**

    useRefetchContext();
    useState();
    useEffect();

    <SimpleGrid />
    <ListItem />

**ListItem.jsx**

    useDisclosure(false);

    <Card />
    <Card.Section />
    <AspectRatio />
    <Image />
    <Group />
    <Rating />
    <Text />
    <Modal />
    <RewatchableDetails />

**Navbar.jsx**

    useLocation();

    <Link />
    <Icon />

**Notes.jsx**

    useState("")
    fetchRewatchable();
    useEffect();
    handleSubmit(event);
    deleteNoteHandler(index);

    <Input />
    <Button />
    <Icon />

**RewatchableDetails.jsx**

    useRefecthContext();
    useDisclosure(false);
    useState({});
    useEffect(());
    fetchRewatchable();
    handleDelete();

    <AspectRatio />
    <Image />
    <Pill />
    <Icon />
    <Badge />
    <VideoModal />
    <Button />
    <Notes />
    <Modal />
    <FormModal />

**VideoModal.jsx**

    useDisclosure(false);
    useState("");
    useEffect();

    <Modal />
    <AspectRatio />
    <YouTube />
    <Icon />

## Links 

[Slides Link](https://docs.google.com/presentation/d/1B6tj_7h-XXTiXtzIT4X_8AMYK_o0Xnhu91mCz_pTjuQ/)

[Github repository front-end](https://github.com/igor-ivantsiv/rewatchables-fe)

[Github repository back-end](https://github.com/igor-ivantsiv/rewatchables-be)

[Deployed Link](https://thunderous-biscotti-a44df8.netlify.app/)

## Contributers

[Igor Ivantsiv](https://github.com/igor-ivantsiv)

[Thomas Kruithof](https://github.com/tdot123-1)