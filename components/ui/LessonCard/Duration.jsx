export const Duration = ({ children, className, ...props }) => <span {...props} className={`text-sm text-gray-700 dark:text-gray-400 font-semibold ${className || ""}`}>{children}</span>