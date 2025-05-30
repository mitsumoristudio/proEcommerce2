
import { Link } from "react-router-dom";

export default function PaginateProductPage({pages, page, keyword = ""}) {

    return (
        pages > 1 && (
            <div className="flex justify-center mt-6 mx-auto">
                <nav className="inline-flex shadow-sm justify-center rounded-lg" aria-label="Pagination">
                    {[...Array(pages).keys()].map((x) => {
                        const pageNum = x + 1;
                        const path =
                             keyword
                                ? `/admin/producttable/search/${keyword}/page/${pageNum}`
                                : `/admin/producttable/${pageNum}`;
                        // Need to route the same path as App.js

                        return (
                            <Link
                                key={pageNum}
                                to={path}
                                className={`px-4 py-2 border text-sm font-medium ${
                                    pageNum === page
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                            >
                                {pageNum}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        )
    );

}