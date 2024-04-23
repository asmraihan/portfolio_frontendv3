import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";



function Repository({ html_url, full_name, name, expanded, description, language, stargazers_count, forks_count }) {
    let [focusable, setFocusable] = useState(true)
    let ref = useRef()

    useEffect(() => {
        if (ref.current.offsetTop !== 0) {
            setFocusable(false)
        }
    }, [])
    return (

        <a data-aos="fade-up" ref={ref} href={html_url} target="_blank" rel="noreferrer">
            <div className="cursor-pointer group relative bg-gray-500/5 shadow-lg border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-4 transition-all duration-200 mx-4 lg:mx-0">
                <div className="absolute w-full h-full top-0 right-0 transition-all duration-200">
                    <img src={`https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${full_name}`} alt="repo's image" className="opacity-50 group-hover:opacity-100 transition-all duration-200 w-full h-full rounded-lg" />
                    <div className={`absolute w-full h-full top-0 right-0 bg-gradient-to-t  dark:text-white  dark:hover:text-gray-200 dark:from-black/90 dark:to-black/60 text-black hover:text-gray-800 from-white/80  to-white/40`} />
                </div>
                <div className="relative">
                    <h2 className={`font-display text-lg font-medium dark:text-white  dark:hover:text-gray-200 text-black hover:text-gray-800`}>{name}</h2>
                    <p className="font-display h-10 text-sm text-gray-500 font-light mt-1">{description}</p>
                    <div className="flex items-center justify-between gap-4 mt-10">
                        <div className="flex items-center">
                            <FaCode className="fal fa-code mr-2 w-5" />
                            <p>{language || "Plain/Text"}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                <FaStar className="fal fa-star mr-2 w-5" />
                                <p>{stargazers_count || 0}</p>
                            </div>
                            <div className="flex items-center">
                                <BiGitRepoForked className="fal fa-code-branch mr-2 w-5" />
                                <p>{forks_count || 0}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export function Repos() {
    let ref = useRef()
    let [expanded, setExpanded] = useState(false)
    let [showCollapseButton, setShowCollapseButton] = useState(false)
    let [transition, setTransition] = useState(false)
    let { ref: inViewRef, inView } = useInView({ threshold: 0 })
    let initial = useRef(true)

    useIsomorphicLayoutEffect(() => {
        if (initial.current) {
            initial.current = false
            return
        }
        if (expanded) {
            ref.current.focus({ preventScroll: expanded })
        } else {
            ref.current.focus()
            ref.current.scrollIntoView()
        }
        if (expanded) {
            setShowCollapseButton(false)
        }
    }, [expanded])

    useEffect(() => {
        setTimeout(() => setTransition(expanded), 0)
    }, [expanded])

    useEffect(() => {
        if (!expanded || !inView) return
        function onScroll() {
            let bodyRect = document.body.getBoundingClientRect()
            let rect = ref.current.getBoundingClientRect()
            let middle = rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2
            let isHalfWay = window.scrollY > middle
            if (showCollapseButton && !isHalfWay) {
                setShowCollapseButton(false)
            } else if (!showCollapseButton && isHalfWay) {
                setShowCollapseButton(true)
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll, { passive: true })
        }
    }, [expanded, showCollapseButton, inView])

    // here i think i need to map the data from github api
    const [repositories, setRepositories] = useState([]);
    console.log(repositories)
    const [loading, setLoading] = useState(true);
    const getRepositories = async () => {
        fetch("https://api.github.com/users/asmraihan/repos?per_page=100")
            .then((response) => response.json())
            .then((data) => {
                setRepositories(data);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getRepositories();
    }, []);

    return (
        <section
            ref={ref}
            tabIndex="-1"
            className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 my-20"
        >
            <h2 data-aos="zoom-in" className='text-3xl lg:text-4xl font-bold text-center mt-10'>GitHub Repos</h2>
            <h4 data-aos="zoom-in" className='text-xl lg:text-2xl text-center mt-4 mb-8'><span>Things</span> <span>I've been working on so far</span></h4>
            <div
                ref={inViewRef}
                className={clsx(
                    'grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12',
                    !expanded && 'max-h-[36rem] lg:max-h-[24rem] overflow-hidden'
                )}
            >
                {/* sort github repos by last modified date */}
                {repositories?.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).map((column) => (

                    <Repository key={column.name} expanded={expanded} {...column} />
                ))}
            </div>
            <div
                className={clsx(
                    'inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white/10 pb-20 lg:pb-16 pointer-events-none dark:from-neutral-900/0',
                    expanded ? 'sticky mt-6 lg:mt-10 ' : ' absolute -bottom-[136px] lg:-bottom-[120px]',
                    transition && 'transition-opacity duration-300',
                    expanded && (showCollapseButton ? 'opacity-100 animate-pulse' : 'opacity-0')
                )}
            >
                <button
                    type="button"
                    className={clsx(
                        `dark:text-white  dark:hover:text-gray-200 text-black hover:text-gray-800 px-4 h-12 font-semibold bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 border-2 border-primary/70 flex items-center`,
                        transition && 'transition-transform',
                        expanded && !showCollapseButton && 'translate-y-4',
                        (!expanded || showCollapseButton) && 'pointer-events-auto'
                    )}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Okay, I get the point' : 'Show more...'}
                </button>
            </div>
        </section>
    )
}