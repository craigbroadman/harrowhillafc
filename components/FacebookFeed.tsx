import React from 'react';
import Card from './common/Card';
import { FacebookIcon } from './icons/FacebookIcon';

const FacebookFeed: React.FC = () => {
  const mockPosts = [
    {
      id: 1,
      text: "Great win for the First Team today, 3-1 against Rival Rovers! Man of the match performance from our striker. Up the Hill!",
      time: "2 hours ago",
      imageUrl: "https://picsum.photos/seed/win1/600/400"
    },
    {
      id: 2,
      text: "Don't forget our youth team trials are this Saturday at 10am. Come and join the future of Harrow Hill AFC.",
      time: "1 day ago",
      imageUrl: "https://picsum.photos/seed/youth-trials/600/400"
    },
    {
      id: 3,
      text: "A huge thank you to our sponsors for their continued support this season. We couldn't do it without you!",
      time: "3 days ago",
    }
  ];

  return (
    <section id="feed" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Follow Us on Socials</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">Stay up to date with the latest news and announcements.</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {mockPosts.map(post => (
            <Card key={post.id} className="flex flex-col">
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <img className="h-10 w-10 rounded-full" src="/images/crest.png" alt="Harrow Hill AFC Crest" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Harrow Hill AFC</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time>{post.time}</time>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-base text-gray-600">{post.text}</p>
                </div>
                {post.imageUrl && (
                    <div className="mt-4">
                        <img className="w-full object-cover rounded-lg" src={post.imageUrl} alt="Post image" />
                    </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
                <FacebookIcon className="w-5 h-5 mr-2" />
                Follow us on Facebook
            </a>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeed;