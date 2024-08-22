import NavBar from '../components/NavBar'
import CardFilter from '../components/CardFilter'
import DisplayCards from '../components/DisplayCards'

const Home = ({card}) => {
    return (
        <>
          <NavBar title='Magic of the Gathering' />
          <CardFilter />
          <DisplayCards card={'card'} />
        </>
      )
}

export default Home;