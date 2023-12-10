import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "./Home"
import { Outlet } from 'react-router-dom'
import FetchItems from "../components/FetchItems";
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner';
function App() {
  const fetchStatus = useSelector((state => state.fetchStatus));
  return (
    <>
      <div>
        <Header />
        <FetchItems />
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
        <Footer />


      </div>

    </>
  )
}

export default App
