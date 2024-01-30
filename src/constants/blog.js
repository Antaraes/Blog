import {
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
  image_9,
  image_10,
  image_11,
  image_12,
  author,
} from "@/assets/images";
import HeroImage from "@/assets/images/heroImage.png";
export const HeroSectionMock = {
  image: HeroImage,
  title: "A few words about this blog platform, Ghost, and how this site was made",
  body: "Why Ghost (& Figma) instead of Medium, WordPress or other options?",
};

export const blogs = [
  {
    id: 1,
    image: image_1,
    title: "Hello world, or, in other words, why this blog exists",
    authorImage: author,
    authorName: "Mika Matikainen",
    created_at: "Apr 15, 2020",
    time_to_read: "4",
    twitter_url: "http://twitter.com",
    facebook_url: "http://www.facebook.com",
    body: [
      {
        id: 1,
        image: image_1,
        title:
          // eslint-disable-next-line no-multi-str
          "Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height. ",
        content: ` content:
          "<p>
          <span style="font-size: 18px;">Quill Rich Text Editor</span>
      </p>
      <p>
          <br>
      </p>
      <p>Quill is a free,
          <a href="https://github.com/quilljs/quill/" target="_blank">open source</a>WYSIWYG editor built for the modern web. With its
          <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a>and a
          <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</p>
      <p>
          <br>
      </p>
      <ul>
          <li>Fast and lightweight</li>
          <li>Semantic markup</li>
          <li>Standardized HTML between browsers</li>
          <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
      </ul>
      <p>
          <br>
      </p>",`,
      },
      {
        id: 2,
        image: image_1,
        title:
          // eslint-disable-next-line no-multi-str
          "Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height. ",
        content: ` content:
          "<p>
          <span style="font-size: 18px;">Quill Rich Text Editor</span>
      </p>
      <p>
          <br>
      </p>
      <p>Quill is a free,
          <a href="https://github.com/quilljs/quill/" target="_blank">open source</a>WYSIWYG editor built for the modern web. With its
          <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a>and a
          <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</p>
      <p>
          <br>
      </p>
      <ul>
          <li>Fast and lightweight</li>
          <li>Semantic markup</li>
          <li>Standardized HTML between browsers</li>
          <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
      </ul>
      <p>
          <br>
      </p>",`,
      },
    ],
    tags: ["product design", "culture"],
  },
  {
    id: 2,
    image: image_2,
    title: "The Art of Coding: Crafting Digital Masterpieces",
    authorImage: author,
    authorName: "Alice Johnson",
    created_at: "Mar 20, 2022",
    time_to_read: "6",
    twitter_url: "http://twitter.com/alicejohnson",
    facebook_url: "http://www.facebook.com/alicejohnson",
    body: [
      {
        id: 1,
        image: image_2,
        title: "Image caption for coding blog",
        content: "<p>This blog explores the art of coding and crafting digital masterpieces.</p>",
      },
    ],
    tags: ["coding", "technology"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 3,
    image: image_3,
    title: "Exploring the Wonders of Artificial Intelligence",
    authorImage: author,
    authorName: "Bob Smith",
    created_at: "Apr 5, 2022",
    time_to_read: "8",
    twitter_url: "http://twitter.com/bobsmith",
    facebook_url: "http://www.facebook.com/bobsmith",
    body: [
      {
        id: 1,
        image: image_3,
        title: "Image caption for AI blog",
        content: "<p>This blog delves into the wonders of artificial intelligence.</p>",
      },
    ],
    tags: ["artificial intelligence", "technology"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 4,
    image: image_4,
    title: "A Journey into the World of Virtual Reality",
    authorImage: author,
    authorName: "Charlie Brown",
    created_at: "May 10, 2022",
    time_to_read: "5",
    twitter_url: "http://twitter.com/charliebrown",
    facebook_url: "http://www.facebook.com/charliebrown",
    body: [
      {
        id: 1,
        image: image_4,
        title: "Image caption for VR blog",
        content:
          "<p>This blog takes you on a journey into the exciting world of virtual reality.</p>",
      },
    ],
    tags: ["virtual reality", "technology"],
  },
  {
    id: 5,
    image: image_5,
    title: "The Future of Renewable Energy: A Green Revolution",
    authorImage: author,
    authorName: "Eva Johnson",
    created_at: "Jun 15, 2022",
    time_to_read: "7",
    twitter_url: "http://twitter.com/evajohnson",
    facebook_url: "http://www.facebook.com/evajohnson",
    body: [
      {
        id: 1,
        image: image_5,
        title: "Image caption for renewable energy blog",
        content: "<p>Explore the future of renewable energy and the green revolution.</p>",
      },
    ],
    tags: ["renewable energy", "environment"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 6,
    image: image_6,
    title: "Unraveling the Mysteries of Quantum Mechanics",
    authorImage: author,
    authorName: "David Smith",
    created_at: "Jul 1, 2022",
    time_to_read: "8",
    twitter_url: "http://twitter.com/davidsmith",
    facebook_url: "http://www.facebook.com/davidsmith",
    body: [
      {
        id: 1,
        image: image_6,
        title: "Image caption for quantum mechanics blog",
        content:
          "<p>Dive into the mysteries of quantum mechanics and explore its fascinating concepts.</p>",
      },
    ],
    tags: ["quantum mechanics", "science"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 7,
    image: image_7,
    title: "Discovering the Beauty of Mathematical Patterns",
    authorImage: author,
    authorName: "Sophia Brown",
    created_at: "Aug 10, 2022",
    time_to_read: "6",
    twitter_url: "http://twitter.com/sophiabrown",
    facebook_url: "http://www.facebook.com/sophiabrown",
    body: [
      {
        id: 1,
        image: image_7,
        title: "Image caption for mathematical patterns blog",
        content: "<p>Explore the beauty of mathematical patterns and their significance.</p>",
      },
    ],
    tags: ["mathematical patterns", "mathematics"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 8,
    image: image_8,
    title: "The Impact of Technology on Modern Healthcare",
    authorImage: author,
    authorName: "Oliver Johnson",
    created_at: "Sep 5, 2022",
    time_to_read: "9",
    twitter_url: "http://twitter.com/oliverjohnson",
    facebook_url: "http://www.facebook.com/oliverjohnson",
    body: [
      {
        id: 1,
        image: image_8,
        title: "Image caption for healthcare technology blog",
        content: "<p>Explore the profound impact of technology on modern healthcare.</p>",
      },
    ],
    tags: ["healthcare technology", "medicine"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 9,
    image: image_9,
    title: "Journey Through Time: Historical Perspectives",
    authorImage: author,
    authorName: "Emma Smith",
    created_at: "Oct 20, 2022",
    time_to_read: "7",
    twitter_url: "http://twitter.com/emmasmith",
    facebook_url: "http://www.facebook.com/emmasmith",
    body: [
      {
        id: 1,
        image: image_9,
        title: "Image caption for historical perspectives blog",
        content:
          "<p>Take a fascinating journey through time and explore historical perspectives.</p>",
      },
    ],
    tags: ["historical perspectives", "history"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 10,
    image: image_10,
    title: "The Art of Culinary Excellence: A Foodie's Delight",
    authorImage: author,
    authorName: "Daniel Brown",
    created_at: "Nov 15, 2022",
    time_to_read: "8",
    twitter_url: "http://twitter.com/danielbrown",
    facebook_url: "http://www.facebook.com/danielbrown",
    body: [
      {
        id: 1,
        image: image_10,
        title: "Image caption for culinary excellence blog",
        content:
          "<p>Delve into the art of culinary excellence and experience a foodie's delight.</p>",
      },
    ],
    tags: ["culinary excellence", "food"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 11,
    image: image_11,
    title: "Space Exploration: The Final Frontier",
    authorImage: author,
    authorName: "Lily Johnson",
    created_at: "Dec 1, 2022",
    time_to_read: "10",
    twitter_url: "http://twitter.com/lilyjohnson",
    facebook_url: "http://www.facebook.com/lilyjohnson",
    body: [
      {
        id: 1,
        image: image_11,
        title: "Image caption for space exploration blog",
        content:
          "<p>Embark on a journey through space exploration and discover the final frontier.</p>",
      },
    ],
    tags: ["space exploration", "science"],
  },
  // Continue the pattern for other blog objects...
  {
    id: 12,
    image: image_12,
    title: "Diving into the World of Oceanography",
    authorImage: author,
    authorName: "Jack Smith",
    created_at: "Jan 10, 2023",
    time_to_read: "9",
    twitter_url: "http://twitter.com/jacksmith",
    facebook_url: "http://www.facebook.com/jacksmith",
    body: [
      {
        id: 1,
        image: image_12,
        title: "Image caption for oceanography blog",
        content: "<p>Dive into the captivating world of oceanography and explore its wonders.</p>",
      },
    ],
    tags: ["oceanography", "science"],
  },
];
