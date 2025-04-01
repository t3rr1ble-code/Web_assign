<?php
    function makeRGB () {
        return "rgb(".rand(0,255).",".rand(0,255).",50)";
    }
    $n = 20;
    $i = 0;
    do{
        echo "<div style='background-color: ".makeRGB().";'></div>";
        $i++;
    }while($i<$n);
?>
<style>
    div{width: 50px; height: 50px; float: left;}
</style>