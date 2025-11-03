// ===== BLOG LOADER SCRIPT =====
async function loadBlogs() {
  const container = document.getElementById("blog-container");

  try {
    const response = await fetch("../data/blogs.json");
    const blogs = await response.json();

    container.innerHTML = blogs
      .map(
        (blog) => `
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-duration="1000">
          <div class="card blog-card shadow-sm border-0 rounded-4 overflow-hidden h-100 d-flex flex-column">
            <img src="${blog.image}" alt="${blog.title}" class="card-img-top rounded-top-4">
            <div class="card-body d-flex flex-column flex-grow-1">
              <h5 class="card-title fw-bold mb-2">${blog.title}</h5>
              <p class="text-muted small mb-2">
                <i class="bi bi-calendar-event"></i> ${blog.date}
              </p>
              <p class="card-text mb-3 flex-grow-1">${blog.description}</p>
              <a href="./${blog.slug}.html" class="btn btn-readmore mt-3 rounded-pill w-30">Read More</a>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  } catch (error) {
    container.innerHTML = `<p class="text-center text-danger">Failed to load blogs. Please try again later.</p>`;
    console.error("Error loading blogs:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadBlogs);

