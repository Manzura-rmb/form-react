import React from 'react';
import icon from "../assets/i3f.png"
import { Input, Button,Form,InputNumber } from 'antd';
import "../components/form.scss"


export const FormComponent = () => {

    return (
        <form action="">
            <div className="title">
                <img src={icon} alt="" />
                <h1>Your Evenet</h1>
            </div>
            <h2>Online Registration</h2>
            <div className="inputs">
                <div className="inpt1">

                    <Form.Item
                        label="First Name"
                        name="First Name"
                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                        name="Last Name"
                        rules={[{ required: true, message: 'Please input your Last Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <label htmlFor="" className='inpt2'>
                    <span>Email Address</span>
                    <Input placeholder="Email Address" />
                </label>
                <label htmlFor="" className='inpt3'>
                    <span>Company (if applicate)</span>
                    <Input placeholder="Company" />
                </label>
                <label htmlFor="" className='inpt4'>
                    <span>Physical Address</span>
                    <Input placeholder="Physical Address" />
                </label>
                <label htmlFor="" className='inpt5'>
                    <span>Date of Birth</span>
                    <div className="inpts">
                        <Input placeholder="Data" />
                        <Input placeholder="Month" />
                        <Input placeholder="Year" />
                    </div>
                </label>
            </div>
            <Button type="primary" htmlType="submit">Submit</Button>
        </form>
    )
}