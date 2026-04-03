import { useRef,useState,useEffect,useCallback } from "react";


const tabs=[
    {
        id:0,
        name:"Home",
        href:"/"
    },
    {
        id:1,
        name:"About",
        href:"/about"
    },
    {
        id:2,
        name:"Skills",
        href:"/skills"
    },
    {
        id:3,
        name:"Projects",
        href:"/projects"
    },
    {
        id:4,
        name:"Experience",
        href:"/experience"
    },
    {
        id:5,
        name:"Contact",
        href:"/contact"
    }
]
export function Tabs() {
    const tabRef=useRef(null);
    const [tabWidth,setTabWidth]=useState(0);
    const [currentTab,setCurrentTab]=useState(0);
    const updateWidth=useCallback(()=>{
        if(tabRef.current){
            const parentWidth=tabRef.current.getBoundingClientRect().width;
            const numberOfTabs=tabs.length;
            const newTabWidth=parentWidth/numberOfTabs;
            setTabWidth(newTabWidth);
        }
    },[]);
    useEffect(()=>{
        const resizeObserver=new ResizeObserver(updateWidth);
        if(tabRef.current){
            resizeObserver.observe(tabRef.current);

        }
        return ()=>{
            if(tabRef.current){
                resizeObserver.unobserve(tabRef.current);
            }
        }
    },[tabRef, updateWidth])
    return (
        <div className="flex gap-4 w-[80%] items-center justify-between relative rounded-full" ref={tabRef}>    
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className="relative py-3 text-sm font-semibold "
                    onClick={() => setCurrentTab(tab.id)}
                >
                    {tab.name}
                </button>
            ))}
            <div className="absolute inset-0 bg-white rounded-full mix-blend-exclusion"
                style={{
                    width: tabWidth,
                    transform: `translateX(${currentTab * tabWidth}px)`,}}></div>
        </div>
    )
}   
