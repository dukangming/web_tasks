#!/usr/bin/env ruby
# -*- coding: UTF-8 -*-
class Student
  def initialize(id,name,gender,age)
    @stu_id=id
    @stu_name=name
    @stu_gender=gender
    @stu_age=age
  end
  def display_details()
      puts "学生 id #{@stu_id}"
      puts "学生 姓名 #{@stu_name}"
      puts "学生 性别 #{@stu_gender}"
      puts "学生 年龄 #{@stu_age}"
  end
end
#生成随机四个字母的姓名
def newname()
    chars = ("a".."z").to_a
    newname = ""
    1.upto(4) { |i| newname << chars[rand(chars.size-1)] }
    return newname
end
#生成随机性别
def newgender()
  x=rand(0..1)
  if x==0
    return "男"
  end
  if x==1
    return "女"
  end
end
stu = Array.new(3)
id=1
n=0#用来计数
#循环遍历
while id<+101
  name=newname()#生成随机姓名
  gender=newgender()#生成随机性别
  age=rand(15..20)#生成随机年龄
  stu[n]=Student.new("#{id}", "#{name}", "#{gender}","#{age}")
  stu[n].display_details()
  id+=1
  n+=1
end
#写入0.yaml
require 'yaml'
File.open("0.yaml", "wb") {|f| YAML.dump(stu, f) }


#读取文件，待完成
#File.open('0.yaml') { |f| puts f.read }
#File.open('0.yaml') { |f| YAML.load(f) }
