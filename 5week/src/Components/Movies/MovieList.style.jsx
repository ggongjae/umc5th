import styled from "styled-components";
import "./MovieList.css"
const getImageUrl = (path, size = 500) => {
    return `https://image.tmdb.org/t/p/w${size}${path}`;
}

const MovieContainer = styled.div`
    width: calc(100% / 8 - 32px);
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;

}
`;

const Image = styled.img`
    max-width:100%;
`;

const MovieOverview = styled.div`
    position:relative; 

    p {
        display:none;
        color:white ; 

        font-size:8px; 
    }
`;

const OverviewTitle = styled.p`
    position:absolute;
    bottom:200px;
`;

const OverviewContent = styled.p`
    position:absolute;
    bottom:50px;
`;

const MovieInfo = styled.div`
    display:flex; 
    padding :20px ; 
    justify-content :space-between ;
    align-items:center ;
    font-size:8px; 
`;

export default function MovieList({title,poster_path,vote_average,overview}) {
    return (
        
        <MovieContainer>
            <Image src={getImageUrl(poster_path)}/>
            <MovieOverview>
                <OverviewTitle>{title}</OverviewTitle>
                <OverviewContent>{overview}</OverviewContent>
            </MovieOverview> 
            <MovieInfo>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </MovieInfo>
        </MovieContainer>
    );
};
