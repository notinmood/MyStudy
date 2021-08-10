<?php
/**
 * @file: Gas.php
 * @time: 15:58
 * @date: 2021/8/5
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

namespace PHP\Study\ComposerStudy;

/**
 *
 */
class Gas implements IEngine
{
    /**
     * @return string
     */
    public function power():string
    {
        return "汽油";
    }
}