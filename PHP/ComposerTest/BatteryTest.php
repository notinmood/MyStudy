<?php
/**
 * @file: BatteryTest.php
 * @time: 9:24
 * @date: 2021/8/10
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

namespace PHP\Study\ComposerStudy;

use PHPUnit\Framework\TestCase;

class BatteryTest extends TestCase
{
    /**
     *
     */
    public function testPower()
    {
        $entity= new Battery();
        $b= $entity-> power();
        $this->assertEquals("电池", $b);
    }
}
