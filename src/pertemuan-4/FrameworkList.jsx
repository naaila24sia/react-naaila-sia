import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Tech Frameworks
                    </h1>
                    <p className="text-gray-500">Explore the best tools for modern development</p>
                </header>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {frameworkData.map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                        >
                            {/* Decorative element */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                        {item.name}
                                    </h2>
                                    <span className="text-[10px] uppercase tracking-widest font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                        {item.details.releaseYear}
                                    </span>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {item.description}
                                </p>

                                <div className="text-xs text-gray-400 mb-4">
                                    <span className="block italic">Developed by:</span>
                                    <span className="text-gray-700 font-medium">{item.details.developer}</span>
                                </div>
                            </div>

                            <div>
                                {/* Tags Section */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-600 text-[10px] px-2.5 py-0.5 rounded-full font-medium"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <a
                                    href={item.details.officialWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center w-full py-2.5 px-4 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-200"
                                >
                                    View Website
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}