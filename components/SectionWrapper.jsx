const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-5 sm:py-28 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper