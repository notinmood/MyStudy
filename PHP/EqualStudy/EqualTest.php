<?php
/**
 * @file   : EmptyTest.php
 * @time   : 7:18
 * @date   : 2022/1/13
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

namespace Hiland\Test\utils;

use PHPUnit\Framework\TestCase;

class EqualTest extends TestCase
{
    /**
     * null 和 false 是相等的 (==)
     * null 和 false 是不全等的 (!==)
     * @return void
     */
    public function testNull1()
    {
        $this->_testNull(false);
    }

    /**
     * null 和 0 是相等的 (==)
     * null 和 0 是不全等的 (!==)
     * @return void
     */
    public function testNull2()
    {
        $this->_testNull(0);
    }

    private function _testNull($targetData)
    {
        $nullData = null;
        $actual = false;
        if ($targetData == $nullData) {
            $actual = true;
        }
        self::assertEquals(true, $actual);


        $actual = false;
        if ($targetData === $nullData) {
            $actual = true;
        }
        self::assertEquals(false, $actual);
    }

    public function testEqual()
    {
        $a = 1;
        $b = "1";
        $actual = false;
        if ($a == $b) {
            $actual = true;
        }
        self::assertEquals(true, $actual);

        $actual = false;
        if ($a === $b) {
            $actual = true;
        }
        self::assertEquals(false, $actual);
    }

}