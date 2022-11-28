import PostTweet from "../../../components/PostTweet";
import Tweet from "../../../components/Tweet";
import { Tweet as TweetModel } from "../../../types/Tweet";
import styles from "./Twitter.module.css";

const tweets: TweetModel[] = [
  {
    id: "1",
    message: "Test tweet",
    date: new Date(),
    likeCount: 1,
    retweetCount: 0,
    author: { id: "1", pseudo: "user1" },
    liked: true,
    retweeted: false,
  },
  {
    id: "2",
    message: "Test tweet 2",
    date: new Date(),
    likeCount: 5,
    retweetCount: 0,
    author: { id: "2", pseudo: "user2" },
    liked: true,
    retweeted: false,
  },
];

export default function Timeline() {
  return (
    <div className="container">
      <PostTweet />
      <div className={styles.messages}>
        <h1>Timeline</h1>
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </div>
  );
}
