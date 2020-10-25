<nav class="nav">
    <ul id="menu">
        <li class="li"><a class="menuText" href="index.php">Start</a></li>
        <!--Chekc if user is logged in, and displays log in if not, else log out -->
        <li class="li">
            <?php if(isset($_SESSION['username'])) : ?>
                <a class="menuText" href="logOut.php">Logga ut</a>
            <?php else : ?>
                <a class="menuText" href="index.php">Logga in</a>
            <?php endif; ?>
        </li>
         <!--Displays the whole menu if user is logged in -->
        <?php if(isset($_SESSION['username'])) : ?>
        <li class="li"><a class="menuText" href="courses.php">Courses</a></li>
        <li class="li"><a class="menuText" href="post.php">Portfolio</a></li>
        <li class="li"><a class="menuText" href="post.php">Work</a></li>
        <li class="li"><a class="menuText" href="post.php">Languages</a></li>
        <?php endif; ?>
        <!-- # är för att länka till en viss plats på sidan, tror detta skall bort
        <li class="li"><a class="menuText" href="start.html#aside">Bloggare</a></li>-->
    </ul>
</nav>