import { useEffect, useRef } from "react";

export const useObsever = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        let cb = (entries, observer) => {
          if (entries[0].isIntersecting && canLoad) {
            callback()
          }
          // console.log('entries', entries);
        }   
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}