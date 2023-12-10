import React from 'react'
import HomeItems from "../components/HomeItems"
import { useSelector } from 'react-redux'
const Home = () => {
    const items = useSelector(state => state.items)
    console.log('items=>', items);
    return (
        <main>
            <div className="items-container">
                {
                    items.map((item) => (
                        <HomeItems key={item.id} item={item} />
                    ))
                }

            </div>
        </main>
    )
}

export default Home