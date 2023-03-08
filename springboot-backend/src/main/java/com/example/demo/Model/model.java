package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "sortingtable")
public class model {
@Id
@Column(name="id")
private int id;
@Column(name="collegename")
private String college_name;
@Column(name="city")
private String city;


public int getId() {
return id;
}
public void setId(int id) {
this.id = id;
}
public String getCollege_name() {
return college_name;
}
public void setCollege_name(String college_name) {
this.college_name = college_name;
}
public String getCity() {
return city;
}
public void setCity(String city) {
this.city = city;
}


}