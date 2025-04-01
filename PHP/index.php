<?php
    define("PI", 3.14);
    $r = 2;

    $C = 2*PI*$r;
    $S = PI*$r*$r;

    print('Chu vi đường tròn r='.$r.' là: '.$C);
    print('<br>Chu vi đường tròn <b>r='.$r.'</b> là: '.$S );

    $sv = array('Nam', 'Bình', 'Xuân', 'Tuấn', 'Hoa');
?>
    <table border="1">
        <thead>
            <tr>
                <td>Number</td>
                <td>Name</td>
            </tr>
        </thead>
        <tbody>
            <?php
            for($i=1; $i < count($sv); $i++)
            echo
            "<tr>
               <td>$i</td>
                <td>$sv[$i]</td>
            </tr>";
            ?>
        </tbody>
    </table>
