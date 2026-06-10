<script setup></script>

<template>
  <footer class="footer">
    <div class="links">
      <a href="/"><img src="../assets/images/Figma.png" alt="Home" /></a>
      <div class="socialLinks">
        <a href="https://x.com/" target="_blank"
          ><img src="../assets/images/X Logo.png" alt="X"
        /></a>
        <a href="https://www.instagram.com/" target="_blank"
          ><img src="../assets/images/Logo Instagram.png" alt="Instagram"
        /></a>
        <a href="https://www.youtube.com/" target="_blank"
          ><img src="../assets/images/Logo YouTube.png" alt="YouTube"
        /></a>
        <a href="https://ru.linkedin.com/" target="_blank"
          ><img src="../assets/images/LinkedIn.png" alt="LinkedIn"
        /></a>
      </div>
    </div>
    <ul class="links">
      <p class="titleLinks">Use cases</p>
      <li><a class="link" href="">UI design</a></li>
      <li><a class="link" href="">UX design</a></li>
      <li><a class="link" href="">Wireframing</a></li>
      <li><a class="link" href="">Diagramming</a></li>
      <li><a class="link" href="">Brainstorming</a></li>
      <li><a class="link" href="">Online whiteboard</a></li>
      <li><a class="link" href="">Team collaboration</a></li>
    </ul>
    <ul class="links">
      <p class="titleLinks">Explore</p>
      <li><a class="link" href="">Prototyping</a></li>
      <li><a class="link" href="">Development features</a></li>
      <li><a class="link" href="">Design</a></li>
      <li><a class="link" href="">Design systems</a></li>
      <li><a class="link" href="">Collaboration features</a></li>
      <li><a class="link" href="">Design process</a></li>
      <li><a class="link" href="">FigJam</a></li>
    </ul>
    <ul class="links">
      <p class="titleLinks">Resources</p>
      <li><a class="link" href="">Blog</a></li>
      <li><a class="link" href="">Best practices</a></li>
      <li><a class="link" href="">Colors</a></li>
      <li><a class="link" href="">Color wheel</a></li>
      <li><a class="link" href="">Support</a></li>
      <li><a class="link" href="">Developers</a></li>
      <li><a class="link" href="">Resource library</a></li>
    </ul>
  </footer>
</template>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 32px 72px 160px 32px;
  gap: 16px;
}

.links {
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  gap: 16px;
}

.links > li {
  list-style: none;
}

.socialLinks {
  display: flex;
  gap: 16px;
}

.titleLinks {
  font-weight: 600;
  margin-bottom: 16px;
}

.link {
  text-decoration: none;
  color: var(--primary-button-color);
}
</style>
