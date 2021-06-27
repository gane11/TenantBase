import React, {useEffect, useState} from 'react';
import ColorCard from './ColorCard';
import {getAllColors} from './store/actions/colorsAction';
import {useDispatch, useSelector} from 'react-redux';
import './Home.css'

let tempColors = [
  {
    id: 4816120,
    title: "ก⊾ᎠกLก",
    userName: "Bubbletripper",
    numViews: 2,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:49:46",
    colors: ["FCED98", "4EA6D6", "3299A8", "005BAE", "301200"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816120/ก⊾ᎠกLก",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/FCED98/4EA6D6/3299A8/005BAE/301200/ก⊾ᎠกLก.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816120_L.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816120",
  },
  {
    id: 4816119,
    title: "ඹദdඹໄඹ",
    userName: "Bubbletripper",
    numViews: 0,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:47:12",
    colors: ["F6C73B", "B2C5E3", "9CA4C8", "0062AD", "00112F"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816119/ඹദdඹໄඹ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/F6C73B/B2C5E3/9CA4C8/0062AD/00112F/ඹദdඹໄඹ.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816119_d.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816119",
  },
  {
    id: 4816118,
    title: "Life Coaching",
    userName: "intentionalcolour",
    numViews: 14,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:47:04",
    colors: ["012872", "FF1493", "6B5B64"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816118/Life_Coaching",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/012872/FF1493/6B5B64/Life_Coaching.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816118_Life_Coaching.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816118",
  },
  {
    id: 4816117,
    title: "ǟɮɖǟʟǟ",
    userName: "Bubbletripper",
    numViews: 0,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:46:27",
    colors: ["FFDD9C", "ADC3DA", "9CA4C8", "0158A8", "2E1800"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816117/ǟɮɖǟʟǟ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/FFDD9C/ADC3DA/9CA4C8/0158A8/2E1800/ǟɮɖǟʟǟ.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816117_.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816117",
  },
  {
    id: 4816116,
    title: "ǞвDǞlǞ",
    userName: "Bubbletripper",
    numViews: 3,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:40:49",
    colors: ["FCED98", "91D8FF", "CBBFA7", "0F69B7", "2E1800"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816116/ǞвDǞlǞ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/FCED98/91D8FF/CBBFA7/0F69B7/2E1800/ǞвDǞlǞ.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816116_Dl.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816116",
  },
  {
    id: 4816115,
    title: "4bd4_4",
    userName: "Bubbletripper",
    numViews: 1,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:40:05",
    colors: ["F7EBBB", "F6C73B", "ADC3DA", "AABADB", "301200"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816115/4bd4_4",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/F7EBBB/F6C73B/ADC3DA/AABADB/301200/4bd4_4.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816115_4bd4_4.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816115",
  },
  {
    id: 4816114,
    title: "ΛßDΛĿΛ",
    userName: "Bubbletripper",
    numViews: 1,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:38:53",
    colors: ["FFE9B9", "F7EBBB", "4EA6D6", "0062AD", "00252C"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816114/ΛßDΛĿΛ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/FFE9B9/F7EBBB/4EA6D6/0062AD/00252C/ΛßDΛĿΛ.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816114_D.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816114",
  },
  {
    id: 4816113,
    title: "ÆþÐÆ∠Æ",
    userName: "Bubbletripper",
    numViews: 1,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:37:33",
    colors: ["FDECC0", "FAC831", "9CA4C8", "0263B0", "2A1700"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816113/ÆþÐÆ∠Æ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/FDECC0/FAC831/9CA4C8/0263B0/2A1700/ÆþÐÆ∠Æ.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816113_.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816113",
  },
  {
    id: 4816112,
    title: "From the soil",
    userName: "BlueberryLane",
    numViews: 4,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:35:08",
    colors: ["2B292A", "5A1D0A", "442F50", "B4979C", "D9D0D5"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816112/From_the_soil",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/2B292A/5A1D0A/442F50/B4979C/D9D0D5/From_the_soil.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816112_From_the_soil.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816112",
  },
  {
    id: 4816111,
    title: "Life Coaching",
    userName: "intentionalcolour",
    numViews: 14,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:34:15",
    colors: ["FF1493", "6B5B64", "012872"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816111/Life_Coaching",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/FF1493/6B5B64/012872/Life_Coaching.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816111_Life_Coaching.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816111",
  },
  {
    id: 4816110,
    title: "ΛBDΛᄂΛ",
    userName: "Bubbletripper",
    numViews: 5,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:34:12",
    colors: ["FFF4D5", "FCED98", "B2C5E3", "3299A8", "0158A8"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816110/ΛBDΛᄂΛ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/FFF4D5/FCED98/B2C5E3/3299A8/0158A8/ΛBDΛᄂΛ.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816110_BD.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816110",
  },
  {
    id: 4816109,
    title: "ДßÐДĿД",
    userName: "Bubbletripper",
    numViews: 2,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:33:37",
    colors: ["FFDD9C", "8DBFE2", "005BAE", "1D2228", "00112F"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816109/ДßÐДĿД",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/FFDD9C/8DBFE2/005BAE/1D2228/00112F/ДßÐДĿД.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816109_.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816109",
  },
  {
    id: 4816108,
    title: "ĂбĎĂĹĂ",
    userName: "Bubbletripper",
    numViews: 1,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:32:57",
    colors: ["00252C", "2E1800", "301200", "2A1700", "00112F"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816108/ĂбĎĂĹĂ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/00252C/2E1800/301200/2A1700/00112F/ĂбĎĂĹĂ.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816108_.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816108",
  },
  {
    id: 4816107,
    title: "Bobs Mini Golf",
    userName: "dhzuehlke",
    numViews: 9,
    numVotes: 1,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:32:16",
    colors: ["A6CB7D", "CF8ED0", "E635A7", "D20979", "675B31"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816107/Bobs_Mini_Golf",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/A6CB7D/CF8ED0/E635A7/D20979/675B31/Bobs_Mini_Golf.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816107_Bobs_Mini_Golf.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816107",
  },
  {
    id: 4816106,
    title: "ÁßĎÁĹÁ",
    userName: "Bubbletripper",
    numViews: 0,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:32:12",
    colors: ["CBBFA7", "B2C5E3", "ADC3DA", "8DBFE2", "4EA6D6"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816106/ÁßĎÁĹÁ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/CBBFA7/B2C5E3/ADC3DA/8DBFE2/4EA6D6/ÁßĎÁĹÁ.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816106_.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816106",
  },
  {
    id: 4816105,
    title: "ĄƄƊĄlĄ",
    userName: "Bubbletripper",
    numViews: 0,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:31:18",
    colors: ["91D8FF", "AABADB", "9CA4C8", "3299A8", "1D2228"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816105/ĄƄƊĄlĄ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/91D8FF/AABADB/9CA4C8/3299A8/1D2228/ĄƄƊĄlĄ.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816105_l.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816105",
  },
  {
    id: 4816104,
    title: "Cool Closeness",
    userName: "BlueberryLane",
    numViews: 1,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:29:39",
    colors: ["D5D2C9", "929081", "C2A9AD", "7A6A75", "442F50"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816104/Cool_Closeness",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/D5D2C9/929081/C2A9AD/7A6A75/442F50/Cool_Closeness.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816104_Cool_Closeness.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816104",
  },
  {
    id: 4816103,
    title: "ḀḃḊḀḶḀ",
    userName: "Bubbletripper",
    numViews: 1,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:28:38",
    colors: ["F7EBBB", "FCED98", "FFDD9C", "FAC831", "F6C73B"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816103/ḀḃḊḀḶḀ",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/F7EBBB/FCED98/FFDD9C/FAC831/F6C73B/ḀḃḊḀḶḀ.png",
    badgeUrl: "http://www.colourlovers.com/images/badges/pw/4816/4816103_.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816103",
  },
  {
    id: 4816102,
    title: "Life Coaching",
    userName: "intentionalcolour",
    numViews: 14,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:27:02",
    colors: ["93808A", "FF1493", "012872"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816102/Life_Coaching",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/93808A/FF1493/012872/Life_Coaching.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816102_Life_Coaching.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816102",
  },
  {
    id: 4816101,
    title: "Dig in",
    userName: "BlueberryLane",
    numViews: 2,
    numVotes: 0,
    numComments: 0,
    numHearts: 0,
    rank: 0,
    dateCreated: "2021-06-26 12:17:53",
    colors: ["D6AC72", "BB784D", "D79074", "7A6A75", "442F50"],
    description: "",
    url: "http://www.colourlovers.com/palette/4816101/Dig_in",
    imageUrl:
      "http://www.colourlovers.com/paletteImg/D6AC72/BB784D/D79074/7A6A75/442F50/Dig_in.png",
    badgeUrl:
      "http://www.colourlovers.com/images/badges/pw/4816/4816101_Dig_in.png",
    apiUrl: "http://www.colourlovers.com/api/palette/4816101",
  },
];

const Home = ({colors, getAllColors}) => {

    let hoursMinutes = `${new Date().getHours()}:${new Date().getMinutes()}  `  

    const [lastUpdate, setLastUpdate] = useState(hoursMinutes);

    useEffect(() => {
        getAllColors()
    }, [])


    return (
        <div className="home">
            <div className="updated-time">
                Last Updated at {lastUpdate} 
            </div>
            <div className="title">
                ColourLovers. <span className="title-right">Live.</span>
            </div>
            <div className="colors-container">
                {colors.map(color => {
                    return(
                        <ColorCard color={color}/>
                    )
                })}
            </div>
        </div>
    );
};

const HomeContainer= () => {
    const colors = useSelector((state) => Object.values(state.colors));
    const dispatch = useDispatch();
    return(
        <Home 
            colors={colors}
            getAllColors={() => dispatch(getAllColors())}
        />
    )
}



export default HomeContainer;