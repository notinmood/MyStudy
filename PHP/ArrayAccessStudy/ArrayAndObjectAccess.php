<?php
/**
 * @file   : ArrayAndObjectAccess.php
 * @time   : 16:44
 * @date   : 2021/9/11
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


namespace PHP\Study\ArrayAccessStudy;

use ArrayAccess;

class ArrayAndObjectAccess implements ArrayAccess
{
    /**
     * Data
     * @var array
     * @access private
     */
    private array $data = [];

    /**
     * Get a data by key
     * @param string The key data to retrieve
     * @access public
     */
    public function __get($key)
    {
        return $this->data[$key];
    }

    /**
     * Assigns a value to the specified data
     * @param string The data key to assign the value to
     * @param mixed  The value to set
     * @access public
     */
    public function __set($key, $value)
    {
        $this->data[$key] = $value;
    }

    /**
     * Whether or not an data exists by key
     * @param string An data key to check for
     * @access      public
     * @return boolean
     * @abstracting ArrayAccess
     */
    public function isContains($key): bool
    {
        return isset($this->data[$key]);
    }

    /**
     * Unsets an data by key
     * @param string The key to unset
     * @access public
     */
    public function remove($key)
    {
        unset($this->data[$key]);
    }

    /**
     * Assigns a value to the specified offset
     * @param string The offset to assign the value to
     * @param mixed  The value to set
     * @access      public
     * @abstracting ArrayAccess
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->data[] = $value;
        } else {
            $this->data[$offset] = $value;
        }
    }

    /**
     * Whether or not an offset exists
     * @param string An offset to check for
     * @access      public
     * @return boolean
     * @abstracting ArrayAccess
     */
    public function offsetExists($offset): bool
    {
        return isset($this->data[$offset]);
    }

    /**
     * Unsets an offset
     * @param string The offset to unset
     * @access      public
     * @abstracting ArrayAccess
     */
    public function offsetUnset($offset)
    {
        if ($this->offsetExists($offset)) {
            unset($this->data[$offset]);
        }
    }

    /**
     * Returns the value at specified offset
     * @param string The offset to retrieve
     * @access      public
     * @return mixed
     * @abstracting ArrayAccess
     */
    public function offsetGet($offset)
    {
        return $this->offsetExists($offset) ? $this->data[$offset] : null;
    }
}