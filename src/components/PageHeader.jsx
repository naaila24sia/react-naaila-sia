export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="flex items-center justify-between p-4">
      
      {/* LEFT */}
      <div className="flex flex-col">
        <span className="text-3xl font-semibold">
          {title}
        </span>

        <div className="flex items-center font-medium space-x-2 mt-2">
          
          {/* kalau breadcrumb array */}
          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className={index === breadcrumb.length - 1 ? "text-gray-700" : "text-gray-500"}>
                  {item}
                </span>
                {index !== breadcrumb.length - 1 && (
                  <span className="text-gray-500">/</span>
                )}
              </div>
            ))
          ) : (
            <span className="text-gray-500">{breadcrumb}</span>
          )}

        </div>
      </div>

      {/* RIGHT (button / bebas) */}
      <div>
        {children}
      </div>

    </div>
  );
}