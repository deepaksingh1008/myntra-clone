import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { itemsActions } from '../store/itemSlice'
import { fetchStatusActions } from '../store/fetchStatusSlice'
const FetchItems = () => {
    const fetchStatus = useSelector(state => state.fetchStatus)
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchStatusActions.markFetchingStarted());
        fetch('https://deepaksingh1008.github.io/apitest/items.json', { signal })
            .then((res) => res.json())
            .then(({ items }) => {
                console.log("item-->", items);
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(fetchStatusActions.markFetchingFinished());
                dispatch(itemsActions.addInitialItem(items));
            });
        return () => {
            controller.abort();
        };

    }, [fetchStatus]);
    return (
        <>
            <div>
            </div>
        </>
    )
}

export default FetchItems



//http://localhost:8080/items