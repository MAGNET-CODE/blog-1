/* eslint-disable jsx-a11y/anchor-is-valid */
export default function BlogTableComponent() {
    return (
        <div className="flex flex-col mt-5">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        BlogTitle
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        BlogAuthor
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Text
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {/* {blogs.map((blog, key) => ( */}
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            {/* {blog._id} */}
                                            <p>5</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {/* {blog.title} */}
                                            <p>weblog</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {/* {blog.author} */}
                                            <p>faryad</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                           {/* {blog.text} */}
                                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt quisquam quod dolore impedit ad explicabo aperiam, corporis, recusandae quidem odit iure quaerat. Molestiae accusamus dolores nobis, sed reiciendis repellat.</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
                                                onClick={() => {
                                                    // deleteHandler(blog._id)
                                                }}
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                {/* ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
  