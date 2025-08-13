from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    ROLE_CHOICES = [
        ('Designer', 'Designer'),
        ('User', 'User'),
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    
    def __str__(self):
        return f"{self.user.username}'s Profile"




    # done by umar.......
class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
        
    def __str__(self):
        return self.username
    
class UserDetails(models.Model):
    role = models.ForeignKey(Profile, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    contact_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"    
        
class InteriorDesigner(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    contact_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    years_of_experience = models.PositiveIntegerField(default=0)
    portfolio_link = models.URLField(blank=True, null=True)
    specialization = models.CharField(max_length=100, blank=True, null=True)
        
    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.years_of_experience} - Interior Designer"

class Products(models.Model):
    Product_Name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
        
    def __str__(self):
        return self.Product_Name

class Consultations(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    designer_id = models.ForeignKey(InteriorDesigner, on_delete=models.CASCADE)
    date = models.DateTimeField()
    notes = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=[
            ('Scheduled', 'Scheduled'),
            ('Completed', 'Completed'),
            ('Cancelled', 'Cancelled')
        ], default='Scheduled')
        
    def __str__(self):
        return f"Consultation on {self.date} with {self.designer_id} for {self.user_id.username}"
        
class category_id (models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
            
    def __str__(self):
        return self.name
            
class Review_id(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE)
    designer_id = models.ForeignKey(InteriorDesigner, on_delete=models.CASCADE)
    comment = models.TextField()

    def __str__(self):
        return f"Review by {self.user_id.username} for {self.product_id} - Designer: {self.designer_id}"
        
class Product_category(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE)
    category_id = models.ForeignKey('category_id', on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
             
    def __str__(self):
        return f"{self.product_id} in {self.category_id.name} category"