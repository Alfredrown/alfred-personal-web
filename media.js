{/* <script>
document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal",
    });

    let blocks = document.querySelectorAll(".block[data-block-section]");

    scroll.on("scroll", (args) => {
      // Iterate over each block
      blocks.forEach((block) => {
        let attr = block.getAttribute("data-block-section");
        let section = document.querySelector(
          `section[data-block-section='${attr}']`
        );

        // Calculate the position of the section relative to the viewport
        let sectionPosition = section.getBoundingClientRect().left;
        let blockPosition = block.getBoundingClientRect().left;

        // Determine the state of the block based on its position
        if (sectionPosition <= blockPosition && blockPosition <= sectionPosition + section.offsetWidth) {
          // Block is in view
          block.classList.add("active");
          block.classList.remove("init");
          block.classList.remove("fixed");
        } else {
          // Block is not in view
          block.classList.remove("active");
          block.classList.remove("fixed");

          if (blockPosition < sectionPosition) {
            // Block is before the section
            block.classList.add("init");
          } else {
            // Block is after the section
            block.classList.add("fixed");
          }
        }
      });
    });
});
</script> */}
