import './style/Information.css';

// const dataForProfintiles = [
//     {
//         name: 'Alberto Garcia',
//         avatar: '',
// socialMedia: [
//     {
//         name: 'Facebook',
//         url: 'facebook.com',
//         icon: ''
//     }
// ]
//     }
// ]

interface ISocialMedia {
    name: string,
    profesional: string,
    url: string,
    icon: string
}

const Profile = ({
    name,
    profesional,
    socialMedia,
    avatar,
    styles
}: {
    name?: string,
    profesional?: string,
    socialMedia?: ISocialMedia[],
    avatar: any,
    styles?: string
}) => {
    return (
        <div>
            <img
                alt='img'
                src={avatar}
                className={styles}
            />
            <h2> {name}  {profesional} </h2>
            {
                socialMedia?.map((socialMedia) => {
                    return <a href={socialMedia.url} rel="noopener" className={socialMedia.icon}>{socialMedia.name}</a>
                })
            }
        </div>)
}

function Information() {
    return (
        <>
            <div style={{ padding: '5px', }} />

            <div className="center">
                <Profile
                    styles='borderImg'
                    avatar='https://raw.githubusercontent.com/RamCode1621/waifu-app/master/src/assets/power_by.png'
                />

            </div>

            <div className="container">
                <div className="left">
                    <Profile
                        styles='Img'
                        avatar='https://raw.githubusercontent.com/RamCode1621/waifu-app/master/src/assets/backend.jpg'
                        name='Richard Aguilar /'
                        profesional='backend'
                    />

                </div>
                <div className="right">
                    <Profile
                        styles='Img'
                        avatar='https://raw.githubusercontent.com/RamCode1621/waifu-app/master/src/assets/frontend.jpeg'
                        name='Alberto Guaman /'
                        profesional='frontend'

                    />

                </div>
            </div>
        </>
    )
}

export default Information;