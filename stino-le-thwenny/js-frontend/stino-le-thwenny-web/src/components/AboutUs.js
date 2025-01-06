import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Layout from './Layout';
import {
  AboutUsContainer,
  WikipediaContainer,
  Header,
  Paragraph,
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
} from './AboutUsStyles';

const AboutUs = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  const youtubeApiKey = 'AIzaSyC2SJjHKr_bUo5SE8ik0nnoKyCSGHwhOFc';

  // Extract video IDs from YouTube URLs
  const videoUrls = [
    { id: '1', url: 'https://www.youtube.com/watch?v=bPejOJN9n9o' },
    { id: '2', url: 'https://www.youtube.com/watch?v=ij2IlhR2zDo' },
    { id: '3', url: 'https://www.youtube.com/watch?v=cYPzZbv21HQ' },
    { id: '4', url: 'https://www.youtube.com/watch?v=QjF_XMMPYqY' },
    { id: '5', url: 'https://www.youtube.com/watch?v=DIF4VO4ZFpI' },
    { id: '6', url: 'https://www.youtube.com/watch?v=EAXk4vXOI8c' },
  ];

  // Fetch video data from YouTube API
  useEffect(() => {
    const fetchVideoData = async () => {
      const videoData = await Promise.all(
        videoUrls.map(async (video) => {
          const videoId = video.url.split('v=')[1];
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${youtubeApiKey}&part=snippet`
          );
          const snippet = response.data.items[0].snippet;
          return {
            id: video.id,
            url: video.url,
            title: snippet.title,
            thumbnail: snippet.thumbnails.medium.url,
          };
        })
      );
      setVideos(videoData);
    };

    fetchVideoData();
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
          <Header>About Stino Le Thwenny</Header>
          <WikiImage src="/propic.jpg" alt="About Us" />
          <p class="text-center text-muted mb-5">
      Stino Le Thwenny is a South African hip-hop duo from Bloemfontein, known for their unique blend of Kwaito and hip-hop influences. The group consists of Katlego "Castino the Hero" Semaye and Kanelo "Thwenny" Motaung, who began making music together in 2014.
    </p>

    <h3 class="text-secondary">Career Highlights</h3>
    <ul class="list-unstyled mb-4">
      <li>
        <strong>Early Beginnings:</strong> The duo aimed to introduce a new sound to the South African music scene.
      </li>
      <li>
        <strong>Breakthrough Collaborations:</strong> Collaborations with Khuli Chana, Tyler ICU, and Lady Du on tracks like "Buyile" earned them mainstream recognition.
      </li>
      <li>
        <strong>Hit Singles:</strong> "Mshimane 2.0," featuring K.O, Khuli Chana, and Major League DJs, received significant acclaim.
      </li>
      <li>
        <strong>Debut Album:</strong> Released "You Want Some More?" in 2023, featuring collaborations with Maglera Doe Boy.
      </li>
    </ul>

    <h3 class="text-secondary">Musical Style</h3>
    <p class="mb-4">
      Stino Le Thwenny's sound blends South African musical traditions with contemporary hip-hop, creating authentic and resonant music described as "rooted, spiritual, and believable."
    </p>

    <h3 class="text-secondary">Challenges and Achievements</h3>
    <p class="mb-4">
      Despite challenges in introducing a new sound and navigating the complexities of the music business, the duo has achieved significant milestones, including multiple hit songs and collaborations with their idols.
    </p>

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