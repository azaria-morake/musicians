import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Layout from './Layout';
import {
  AboutUsContainer,
  WikipediaContainer,
  Header,
  VideoCarouselContainer,
  VideoCarouselWrapper,
  VideoCard,
  VideoThumbnail,
  PlayButtonOverlay,
  YTCarouselButton,
  YouTubeModal,
  YouTubeModalContent,
  CloseButton,
  WikiImage,
  CenteredParagraph,
  SectionHeading,
  UnstyledList,
  ListItem,
  StrongText,
  Paragraph,
} from './AboutUsStyles';

const AboutUs = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  const youtubeApiKey = 'AIzaSyC2SJjHKr_bUo5SE8ik0nnoKyCSGHwhOFc'; // Replace with your YouTube API key
  const CHANNEL_NAME = 'StinoLeThwenny'; // YouTube channel name

  // Fetch videos from the YouTube channel
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Step 1: Get the channel ID using the channel name
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              q: CHANNEL_NAME,
              type: 'channel',
              key: youtubeApiKey,
            },
          }
        );

        const channelId = channelResponse.data.items[0].id.channelId;

        // Step 2: Fetch videos from the channel using the channel ID
        const videosResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              channelId: channelId,
              maxResults: 20, // Adjust the number of videos to fetch
              order: 'date', // Fetch the latest videos
              type: 'video',
              key: youtubeApiKey,
            },
          }
        );

        // Extract video details
        const videoList = videosResponse.data.items.map((item) => ({
          id: item.id.videoId,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

        setVideos(videoList);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [youtubeApiKey]);

  // Function to open YouTube modal
  const openYouTubeModal = (video) => {
    setSelectedVideo(video);
  };

  // Function to close YouTube modal
  const closeYouTubeModal = () => {
    setSelectedVideo(null);
  };

  // Carousel navigation functions
  const handlePrev = () => {
    setTranslateX((prev) => Math.min(prev + 310, 0));
  };

  const handleNext = () => {
    const maxTranslateX = -310 * (videos.length - 1); // Maximum scroll limit
    setTranslateX((prev) => Math.max(prev - 310, maxTranslateX));
  };

  return (
    <Layout>
      <AboutUsContainer>
        {/* Wikipedia-style Container */}
        <WikipediaContainer>
        <WikiImage src="/propic.jpg" alt="About Us" />
          <Header>About Stino Le Thwenny</Header>
          

  <CenteredParagraph>
    Stino Le Thwenny is a South African hip-hop duo from Bloemfontein, known for our unique blend of Kwaito and hip-hop influences. The group consists of Katlego "Castino the Hero" Semaye and Kanelo "Thwenny" Motaung, who began making music together in 2014.
  </CenteredParagraph>

  <SectionHeading>Career Highlights</SectionHeading>
  <UnstyledList>
    <ListItem>
      <StrongText>Early Beginnings:</StrongText> We aimed to introduce a new sound to the South African music scene.
    </ListItem>
    <ListItem>
      <StrongText>Breakthrough Collaborations:</StrongText> Collaborations with Khuli Chana, Tyler ICU, and Lady Du on tracks like "Buyile" earned us mainstream recognition. We've also worked with
      Cassper Nyovest, KO, Maglera Doe Boy, Nadia Nadia, Boity, Dj PH, Roiii, Makwa, Ntate Stunna and Major League Djz.
    </ListItem>
    <ListItem>
      <StrongText>Hit Singles:</StrongText> "Mshimane 2.0," featuring K.O, Khuli Chana, and Major League DJs, received significant acclaim.
    </ListItem>
    <ListItem>
      <StrongText>Debut Album:</StrongText> Released "You Want Some More?" in 2023, featuring collaborations with Maglera Doe Boy.
    </ListItem>
  </UnstyledList>

  <SectionHeading>Musical Style</SectionHeading>
  <Paragraph>
    Stino Le Thwenny's sound blends South African musical traditions with contemporary hip-hop, creating authentic and resonant music described as "rooted, spiritual, and believable."
  </Paragraph>

  <SectionHeading>Challenges and Achievements</SectionHeading>
  <Paragraph>
    Despite challenges in introducing a new sound and navigating the complexities of the music business, we've achieved significant milestones, including multiple hit songs and collaborations with our idols.
  </Paragraph>

  <SectionHeading>Contact/Bookings</SectionHeading>
  <Paragraph>
    bookstinolethwenny@gmail.com
    Contact : (071) 299-8297
    WhatsApp: 072 657 4635
  </Paragraph>

        </WikipediaContainer>

        {/* Video Carousel */}
        <Header>Featured Videos</Header>
        <VideoCarouselContainer>
          <YTCarouselButton className="prev" onClick={handlePrev}>
            &#8249;
          </YTCarouselButton>
          <VideoCarouselWrapper translateX={translateX}>
            {videos.map((video) => (
              <VideoCard key={video.id} onClick={() => openYouTubeModal(video)}>
                <VideoThumbnail src={video.thumbnail} alt={video.title} />
                <PlayButtonOverlay>▶</PlayButtonOverlay>
              </VideoCard>
            ))}
          </VideoCarouselWrapper>
          <YTCarouselButton className="next" onClick={handleNext}>
            &#8250;
          </YTCarouselButton>
        </VideoCarouselContainer>

        {/* YouTube Modal */}
        {selectedVideo && (
          <YouTubeModal onClick={closeYouTubeModal}>
            <YouTubeModalContent onClick={(e) => e.stopPropagation()}>
              <iframe
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${selectedVideo.url.split('v=')[1]}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <CloseButton onClick={closeYouTubeModal}>×</CloseButton>
            </YouTubeModalContent>
          </YouTubeModal>
        )}
      </AboutUsContainer>
    </Layout>
  );
};

export default AboutUs;