const blogs = [
    {
        id: 1,
        title: "How to Recommend Effectively",
        description: "The Blog Section is a dedicated space to provide users with valuable insights, tips, and trends to enhance their experience on the QueryNest platform. This section features articles like 'How to Recommend Effectively,' which offers actionable advice for making impactful recommendations, and 'Top Trends in Recommendations,' a deep dive into emerging patterns in the recommendation ecosystem. Each blog card is visually appealing, with a sleek design, engaging titles, and concise descriptions to capture the user's attention.",
        link: "/blog/how-to-recommend",
        image: "https://thesoftwarepro.com/wp-content/uploads/2017/09/access-queries.png"
    },
    {
        id: 2,
        title: "Top Trends in Recommendations",
        description: "The responsive grid layout ensures the section looks great on all devices, while the links guide users to detailed blog posts. Built using React.js and styled with Tailwind CSS, the Blog Section combines functionality and aesthetics. Dynamic data handling makes it easy to update or fetch new content, keeping the section fresh and relevant.",
        link: "/blog/top-trends",
        image: "https://www.shutterstock.com/image-illustration/any-questions-text-written-over-260nw-1054526876.jpg"
    },
];

const BlogSection = () => {
    return (
        <section className="bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-5">Our Blog</h2>
                <p className="text-center text-gray-600 mb-8 text-xl">
                    Explore tips, guides, and trends to enhance your experience with recommendations.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4">{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
