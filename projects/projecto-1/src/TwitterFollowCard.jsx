import {useState} from "react";

export function TwitterFollowCard({username='null', name='null'}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const toggleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' src={`https://unavatar.io/${username}`} alt="avatar"/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-span'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={toggleFollow}>
                    {buttonText}
                </button>
            </aside>
        </article>
    )
}