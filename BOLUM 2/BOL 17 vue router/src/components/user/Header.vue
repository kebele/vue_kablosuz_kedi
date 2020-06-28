<template>
    <div>
        <ul class="nav nav-pills">
        <router-link
            active-class="active" 
            to="/"
            exact
            tag="li">
            <a>home</a>
        </router-link>
        <!-- <router-link
            active-class="active"
            to="/user/1"
            exact
            tag="li">
            <a>user 1</a>
        </router-link>
        <router-link
            active-class="active"
            to="/user/2"
            exact
            tag="li">
            <a>user 2</a>
        </router-link> -->
        <router-link
            active-class="active"
            to="/user"
            tag="li">
            <a>user</a>
        </router-link>

            <!-- <li><a href="">home</a></li>
            <li><a href="">user</a></li> -->
        </ul>
    </div>
</template>

